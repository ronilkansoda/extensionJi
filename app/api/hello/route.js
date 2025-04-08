export const dynamic = "force-static";

export async function GET() {
    const a = 3;
    if (a > 10)
        return new Response(JSON.stringify({ error: "Something went wrong!" }), { status: 400, headers: { "Content-Type": "application/json" } });

    return new Response(JSON.stringify({
        vali: "kishan",
        message: "Hello from API!",
        time: new Date().toISOString()
    }), { status: 200, headers: { "Content-Type": "application/json" } });
}
