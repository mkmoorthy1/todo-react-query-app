
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="main">
				<div className="box">
          <AddTodo/>
          <TodoList/>
        </div>
			</div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;
