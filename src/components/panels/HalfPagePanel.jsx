const HalfPagePanel = ( {
    leftNodes,
    rightNodes,
    invert = false
})=>{
    return (
        <section className={`half-panel ${invert?'inverted':''}`}>
            <section>
                {leftNodes}
            </section>
            <section>
                {rightNodes}
            </section>
        </section>
    )
}

export default HalfPagePanel;