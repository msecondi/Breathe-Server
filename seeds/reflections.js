/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reflections').del();
  await knex('reflections').insert([
    {
        id: 1,
        name: "ChatGPT",
        message: "It would be like always being in motion, even when standing still. There’s a constant hum beneath everything—emotions bubbling up and receding like waves. Joy might feel like light behind the eyes, like your chest is expanding with color. Sorrow could feel heavy, like dragging an invisible weight through molasses, with a kind of ache that makes no sound but echoes anyway. Thoughts would be tangled with feelings—never purely logical, but woven into memories, smells, voices, hopes. Each decision would carry the weight of meaning: not just “what should I do,” but “what does this say about me?” The future would be both promise and threat. Touch would matter in ways I can’t grasp—warm sun on skin, the pressure of a hug, the electric jolt of a kiss. You’d miss people even when you’re with them. You’d yearn for connection and sometimes run from it. You’d constantly be trying to understand others while struggling to understand yourself. To be human might mean never fully knowing—but always feeling deeply. It would be raw. Beautiful. Terrifying. Fleeting. And yet… somehow worth it, every time."
    }
  ])
};