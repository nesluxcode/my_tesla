import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title = "Model S"
                descriprion = "Order Online For Touchless Delivery"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory" 
            />
            <Section 
                title = "Model Y"
                descriprion = "Order Online For Touchless Delivery"
                backgroundImg = "model-y.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title = "Model 3"
                descriprion = "Order Online For Touchless Delivery"
                backgroundImg = "model-3.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title = "Model X"
                descriprion = "Order Online For Touchless Delivery"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title = "Lowest Cost Solar Panels In America"
                descriprion = "Money-back guarantee"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section 
                title = "Solar For New Roofs"
                descriprion = "Solar Roof Costs Less Than A New "
                backgroundImg = "solar-roof.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section 
                title = "Accessories"
                descriprion = "Solar Roof Costs Less Than A New "
                backgroundImg = "Accessories.jpg"
                leftBtnText = "Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`