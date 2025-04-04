<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='The Church Responsible'>
    <p slot='sectionBlurb'>
        Douglass targets the church in America and speaks about
        how they go against other Christian values.
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "They convert the very name of
                religion into an <Semibold>engine of tyranny</Semibold>, and barbarous cruelty, and serve to confirm more infidels"
            </div>
            <div slot='description'>
                Douglass believes that the church is ruining the reputation of Christianity
                and is instead fueling all of the worst parts of humans due to the their attitude
                to slavery.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                "Let the <Semibold>religious press, the pulpit, the Sunday school, the conference meeting, the great
                ecclesiastical, missionary, bible and tract associations </Semibold> of the land array their immense powers
                against slavery, and slave-holding"
            </div>
            <div slot='description'>
                Douglass emphasizes the massive outreach that the church has. He is making the
                listener aware of the fact that the church has a lot of power and could be a
                huge ally in the quest for abolition, but instead feeds its own self interests
                going against the Bible in the process.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                "The American church is guilty, when viewed in connection with what it is doing to uphold
                slavery; but it is superlatively guilty when viewed in connection with its ability to abolish
                slavery.
                The sin of which it is guilty is one of omission as well as of commission."
            </div>
            <div slot='description'>
                Douglass holds the church accountable for slavery still being well and alive.
                Especially in the South, where slavery exists, religion is a big part of culture.
                For the church to denounce slavery would be a big step in the right direction towards
                the abolishment.
            </div>
        </Quote>
    </Quoteholder>
</Section>

