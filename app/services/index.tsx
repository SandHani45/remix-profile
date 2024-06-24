import { useQuery } from '@tanstack/react-query';
 
export function useFetchData() {
  const key = 'https://jsonplaceholder.typicode.com/todos/';
  return useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(key).then((res) =>
        res.json(),
      ),
  })

}