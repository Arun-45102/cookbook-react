const BASE_URL = "https://api.spoonacular.com/food";
export async function getTrivia() {
  const res = await fetch(
    `${BASE_URL}/trivia/random?apiKey=${import.meta.env.VITE_API_KEY}`
  );
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting Trivia");
  const data = await res.json();
  return data;
}
