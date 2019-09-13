import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: ${props => (props.error ? '1px solid #c00' : '1px solid #eee')};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 15px;
  padding: 0 12px;

  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  font-size: 13px;
  line-height: 18px;
  color: #999;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 15px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const RemoveButton = styled(RectButton)`
  margin: 15px 0 0 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #ce272c;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
`;

export const RemoveButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Empty = styled.View`
  display: flex;
  margin-top: 15px;
  align-items: center;
`;
export const EmptyText = styled.Text`
  color: #666;
  font-size: 16px;
  font-weight: bold;
`;
