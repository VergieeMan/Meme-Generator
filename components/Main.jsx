import { useState } from "react"
export default function Main() {
    const [meme, setMeme] = useState({
        topText:"Sending Memes",
        bottomText:"Creating Memes",
        imageUrl:"//i.imgflip.com/2bqzyl.jpg"
    })
    
    function handleChange(e) {
        const {value, name} = e.currentTarget
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="Sending Memes"
                        name="topText"
                        onChange={handleChange}
                        value = {meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Creating Memes"
                        name="bottomText"
                        onChange={handleChange}
                        value = {meme.bottomText}
                    />
                </label>
                <button>Get a new meme image ⏳</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}