
EntityEvents.spawned('caverns_and_chasms:copper_golem', event => {
    event.entity.playSound("alexscaves:disappointment");
    event.cancel();
})