import React, {useState} from "react";









function LikeButton(){
    const [likes, setLikes] = useState(0);
    function increment(){
        setLikes((currentLikes) => currentLikes + 1);
    }
    return <button onClick = {increment}>Like {likes}</button>;
}

export default LikeButton;