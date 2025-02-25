import NvkClassComp from "./components/NvkClassComp";
import NvkFuncComp from "./components/NvkFuncComp";
import NvkJsExpression from "./components/NvkJsExpression";


function NvkApp() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>React JS lesson03 - Nguyen Van Kien</h1>

        <NvkJsExpression />

        <hr/>
        {/*su dung function components */}
        <NvkFuncComp />

        {/*su dung class components */}
        <NvkClassComp></NvkClassComp>
    </div>
  );
}

export default NvkApp;
