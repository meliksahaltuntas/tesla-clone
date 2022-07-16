import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"

            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            /> <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                description="Produce Clean Energy From Your Roof"
                BackgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046"
                leftBtnText="Shop Now"
                rightBtnText="Learn More"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height:300vh;


`