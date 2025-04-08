export const runtime = "edge";

const jokes = {
    programming: [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "There are 10 kinds of people in this world: those who understand binary and those who don’t.",
        "Why did the developer go broke? Because he used up all his cache!"
    ],
    general: [
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised."
    ],
    dad: [
        "Why couldn’t the bicycle stand up by itself? It was two-tired!",
        "I only know 25 letters of the alphabet. I don’t know y."
    ]
};

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category")?.toLowerCase();

    if (!category || !jokes[category]) {
        return new Response(
            JSON.stringify({ error: "Invalid or missing category! Try 'programming', 'general', or 'dad'." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const jokeList = jokes[category];
    const randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)];

    return new Response(
        JSON.stringify({ category, joke: randomJoke }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}
