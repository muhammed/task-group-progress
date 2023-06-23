import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3',
});

export const fetchTaskGroupsService = async () => {
  const response = await api.get('/mock-progress');
  return response.data;
};
