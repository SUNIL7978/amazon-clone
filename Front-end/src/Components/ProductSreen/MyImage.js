import React, { useState } from 'react'

const MyImage = ({ images = [{ url: "" }] }) => {

    const [mainImage, setMainImage] = useState(images[0]);

    console.log(images);

    return (
        <div className='grid grid-cols-4 gap-8 sm:flex-col sm:order-1 sm:grid-cols-2'>
            <div className='flex flex-col items-center justify-center w-full gap-4'>
                {
                    images.map((currimg, index) => {
                        return (
                            <figure>
                                <img src={currimg.url} alt={currimg.filename}
                                    key={index}
                                    className="w-16 h-auto bg-cover object-contain cursor-pointer border border-black p-3 rounded-md"
                                    onClick={() => setMainImage(currimg)}
                                />
                            </figure>
                        )
                    })
                }
            </div>

            <div className='flex items-center order-1'>
                <img src={mainImage.url} alt={mainImage.filename} style={{width:"100%", height:"100%"}}/>
            </div>

        </div>
    )
}

export default MyImage
