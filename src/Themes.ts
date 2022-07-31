export interface Theme {
  name: string,
  body: string,
  text: string,
  button: {
    body: string,
    text: string,
  },
}

export const darkTheme: Theme = {
  name: 'Dark',
  body: '#121212',
  text: '#FFFFFF',
  button: {
    body: '#1DA1F2',
    text: '#FFFFFF',
  },
};

export const lightTheme: Theme = {
  name: 'Light',
  body: '#FFFFFF',
  text: '#000000',
  button: {
    body: '#121212',
    text: '#FFFFFF',
  },
};
