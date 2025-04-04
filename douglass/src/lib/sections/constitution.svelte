<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='The Constitution'>
    <p slot='sectionBlurb'>
        Douglass speaks about the good and bad parts of 
        the Constitution. He also speaks his conclusion to the whole speech in
        this part. In his conclusion, he believes that slavery is dying and he is hopeful for the future.
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "that precisely what <Semibold>I have now denounced is, in fact,
                guaranteed and sanctioned by the Constitution of the United States; that, the right to hold,
                and to hunt slaves is a part of that Constitution</Semibold> framed by the illustrious Fathers of this
                Republic."
            </div>
            <div slot='description'>
                In this part of "The Constiution", Douglass calls out that the Constitution
                does not mention anything about slavery, implying that it is legal and is accepted in this
                "free" country.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                "Constitution is a <Semibold>glorious
                liberty document.</Semibold> Read its preamble, consider its purposes. Is slavery among them? Is it
                at the gateway? or is it in the temple? it is neither"
            </div>
            <div slot='description'>
                Douglass speaks highly about the Constiution in this quote. 
                Although he concedes that slavery is included, in this specific
                excerpt it is not seen as a bad thing, contrary to the other quote. This is a shift in the tone of the speech.
                Changing from a negative view of America and its institutions to a more positive one.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                "While drawing encouragement from 'the
                Declaration of Independence,' the great principles it contains, and the <Semibold>genius of American
                Institutions,</Semibold> my spirit is also cheered by the obvious tendencies of the age.""
            </div>
            <div slot='description'>
                Douglass ends off his speech by talking well of documents that he was 
                previously slandering. Although he may genuinely believe what he was saying, 
                he is most likely also saying it to make the listeners (Americans) get on
                his side prior to him finishing the speech. if he ended by critizing the country
                people would most likely not listen to him or physically harm him.
            </div>
        </Quote>
    </Quoteholder>
</Section>

