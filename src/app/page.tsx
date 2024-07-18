import EventGrid from "@/components/events/EventsGrid";
import Hero from "@/components/hero/Hero";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <EventGrid />
            </main>
        </>
    );
}
