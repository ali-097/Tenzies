import React from "react"

const Header = () => {
    return (
        <div className="main--header">
            <h1 className="game--header">Tenzies</h1>
            <p className="game--instructions">Roll until all dice are the same. Click each die to freeze as it as its 
                current value between rolls.
            </p>
        </div>
    )
}

export default Header;