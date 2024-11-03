export default function Card() {
    return (
        <div className="rounded-lg border-black border-2 h-96 w-64 flex flex-col items-center bg-green-300">
            <div className="mt-4 mb-2 w-2/3">Card Name</div>
            <div className="bg-white box-border border-2 border-black w-4/5 h-2/5"></div>
            <div className="bg-green-200">
                <p className="p-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique enim eget condimentum gravida. Vivamus ut enim porttitor, vulputate augue eu, consequat diam. In faucibus ullamcorper nunc et ornare. Mauris hendrerit libero ac libero semper vulputate. Vivamus tempus, dui vel eleifend venenatis, ipsum est fermentum nibh, vitae finibus tortor erat laoreet purus.</p>
            </div>
        </div>
    )
};
