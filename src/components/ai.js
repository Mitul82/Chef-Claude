import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                { role: "system", content: import.meta.env.VITE_AI_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
            temperature: 0.7
        })
        console.log("Recepie received and sent res");
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
        return "I'm sorry, I'm having trouble connecting to my 'chef brain' right now. Please try again in a moment!";
    }
}

export default getRecipeFromMistral;