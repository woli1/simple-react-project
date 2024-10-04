import UseWindowResize from ".";


export default function UseWindowResizeTest(){
    const {width,height}=UseWindowResize();
    return (
        <div>
            <h1>Use Window resize Hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    );


}