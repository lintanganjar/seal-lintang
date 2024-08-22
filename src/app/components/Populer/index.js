const Populer = ({title, image}) => {
    return (
        <div className="p-[72px]">
            <div className="flex gap-3">
                <div className="bg-blue-500 rounded w-2 " ></div>
                <h1 className="text-2xl font-bold"> Berita Populer </h1>
            </div>
            
            <div>
                <image src={image} width ={200} height ={200} />
                <h3>{title}</h3>
            </div>
    
        </div>
    )
}
export default Populer