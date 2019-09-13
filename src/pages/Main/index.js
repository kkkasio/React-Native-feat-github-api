import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  Actions,
  ProfileButton,
  ProfileButtonText,
  RemoveButton,
  RemoveButtonText,
  Empty,
  EmptyText,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
    error: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) this.setState({ users: JSON.parse(users) });
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    this.setState({ loading: true, error: false });

    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }

    Keyboard.dismiss();
  };

  handleRemoveUser = async item => {
    const { users } = this.state;

    try {
      await this.setState({
        users: users.filter(user => user.login !== item),
      });
    } catch (error) {
      console.tron.log('ok');
    }
  };

  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };

  render() {
    const { users, newUser, loading, error } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            value={newUser}
            error={error}
            onChangeText={text => this.setState({ newUser: text })}
            placeholder="Adicionar Usuário"
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="person-add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        {users.length > 0 ? (
          <List
            data={users}
            keyExtractor={user => user.login}
            renderItem={({ item }) => (
              <User>
                <Avatar source={{ uri: item.avatar }} />
                <Name>{item.name}</Name>
                <Bio>{item.bio}</Bio>
                <Actions>
                  <ProfileButton onPress={() => {}}>
                    <ProfileButtonText
                      onPress={() => this.handleNavigate(item)}
                    >
                      Ver Perfil
                    </ProfileButtonText>
                  </ProfileButton>
                  <RemoveButton
                    onPress={() => this.handleRemoveUser(item.login)}
                  >
                    <RemoveButtonText>Remover</RemoveButtonText>
                  </RemoveButton>
                </Actions>
              </User>
            )}
          />
        ) : (
          <Empty>
            <EmptyText>Sem usuários na lista</EmptyText>
          </Empty>
        )}
      </Container>
    );
  }
}
