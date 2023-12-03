
const SeectionTitle = ({heading}) => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text font-extrabold underline pb-2 w-max mx-auto uppercase mb-10">---{heading}---</h2>
        </div>
    );
};

export default SeectionTitle;