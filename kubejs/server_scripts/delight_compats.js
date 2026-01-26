// Replaces all egg recipes with things that have the #egg tag, should fix any issues w/ farmers delight's fried egg
ServerEvents.recipes(event => {
    event.replaceInput(
  { input: 'minecraft:egg' },
  'minecraft:egg',
  '#c:eggs'
)})