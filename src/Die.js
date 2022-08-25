import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    const Pip = () => <span className="pip" />
    
    let pips = Array(props.value).fill(0).map((_, i) => <Pip key={i} />)
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {pips}
        </div>
    )
}