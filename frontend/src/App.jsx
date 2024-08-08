import "./App.css";
import FetchData from "./components/FetchData";
import CodeEditor from "./components/CodeEditor";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div>
        <Box minH="100vh" bg="*0f0a19" color="gray.500" px={6} py={8}>
        <h1>Welcome</h1>
                <FetchData/>

          <CodeEditor/>
        </Box>
        
      </div>
    </>
  );
}

export default App;
