import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="border-t border-gray py-16">
            <div className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-xl inline mr-5">RuanRita</h1>
                        <p className="text-white mt-2">Back-end developer and Front-end developer</p>
                    </div>
                    <div>
                        <h1 className="text-white text-2xl">Media</h1>
                        <div className="flex gap-3 mt-5">
                            <FaDiscord className="text-gray w-8 h-8" />
                            <FaGithub className="text-gray w-8 h-8" />
                            <FaLinkedin className="text-gray w-8 h-8" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}