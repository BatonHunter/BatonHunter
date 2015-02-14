var Boss = (function() {
	var boss_hp;
	var default_init_hp = 100;

	return {
		initialize:	function (initial_hp) {
					if (initial_hp === undefined)
						initial_hp = default_init_hp;
				},
		getHp:		function () {
					return boss_hp;
				},
		deduceHp:	function () {
					boss_hp -= num;
					return boss_hp;
				}
	}
})();
