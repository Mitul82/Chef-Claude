import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: import.meta.env.VITE_AI_PROMT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        console.log("Recepie received and sent res");
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}

export default getRecipeFromMistral;