
const ApartmentCard = ({apartment}) => {
    const {apartment_image, floor_no, block_name, apartment_no, rent}=apartment
    return (
        <div>
            <div className="card h-60 w-full bg-base-100 shadow-xl image-full">
                <figure><img src={apartment_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Floor No: {floor_no}</h2>
                    <p>Block Name: {block_name}</p>
                    <p>Appartment No: {apartment_no}</p>
                    <p>Rent: BDT{rent}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;