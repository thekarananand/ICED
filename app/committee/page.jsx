import dm_sans from '@/components/TheFont'

import TheHeroSection from '@/components/TheHeroSection'

import TheTimeline from '@/components/TheTimeline'

const PageContent = () => {
    return (
        <main className={dm_sans.className}>
            <TheHeroSection
                smallText=''
                largeText="Meet our Committee Members"
            />
            <div className="S1 SkewSection">
                <section className="content-container">
                    <div className="content">
                        <h2>Credits for Development of this website</h2>
                        <ul>
                            <li>Karan Anand</li>
                            <li>Anirudh Malhotra</li>
                            <li>Shubham Garg</li>
                            <li>Nitish Garg</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default PageContent