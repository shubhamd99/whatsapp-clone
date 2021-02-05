export type RootStackParamList = {
  Root: undefined;
  ChatRoom: {
    id: string;
    name: string;
    imageUri: string;
  };
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
}

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}

export type ChatRoom = {
  id: string;
  users: User[]
  lastMessage: {
    id: string;
    content: string;
    createdAt: string;
  };
}
