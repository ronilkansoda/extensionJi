export const runtime = "edge";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const inputValue = searchParams.get("value");

    if (!inputValue) {
        return new Response(JSON.stringify({ error: "Missing input value!" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({
        vali: inputValue,
        message: `Hello, ${inputValue}!`,
        time: new Date().toISOString(),
    }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}