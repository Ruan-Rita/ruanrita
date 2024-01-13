
export default function CardProject({ image, title, name, description }) {

    return (
        <div className="border-2 border-gray">
            {image && (
                <img src={image} className="w-full h-[230px] object-cover block" />
            )}
            <p className="p-4 border-b-2 text-gray border-gray">{title}</p>
            <div className="p-4">
                <h1 className="text-white font-bold">{name}</h1>
                <p className="text-white min-h-14">{description}</p>
                <div>
                    <button className="border w-24 mr-4 border-primary px-5 py-2 text-white">Live</button>
                    <button className="border w-24 border-gray px-5 py-2 text-white">Cached</button>
                </div>
            </div>
        </div>
    )
}