import { Routes, Route } from "react-router";
import NotFound from "./packages/notFound";
import FormComponent from "./packages/registerform";
import Success from "./packages/success";
import UpdateFormComponent from "./packages/update-form";

function App() {
    return (
        <>
        <Routes>
            <Route path="/register/:schoolPrefix" element={<FormComponent />} />
            <Route path="/register/:schoolPrefix/:studentID" element={<UpdateFormComponent />} />
            <Route path='*' element={<NotFound />} />
            <Route path="/success/:value" element={<Success />} />
        </Routes></>
    )
}
export default App;
