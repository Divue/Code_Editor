import "./App.css";
import FetchData from "./components/FetchData";
import CodeEditor from "./components/CodeEditor";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div >
        <Box minH="100vh" bg="*0f0a19" color="gray.500" px={6} py={8}>
        <h1 style={{ fontWeight: 'bold', color: 'white', textAlign:"center"}}>Welcome</h1>
                <FetchData />

          <CodeEditor/>
        </Box>
        
      </div>
    </>
  );
}

export default App;
