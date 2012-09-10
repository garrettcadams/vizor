E2.plugins["convert_oscilator_unit_modulator"] = function(core, node) {
	var self = this;
	
	this.desc = 'Rescales and offsets a number in the range -1;1 to the range 0;1.';
	this.input_slots = [ { name: 'value', dt: core.datatypes.FLOAT, desc: 'The input value.', lo: -1, hi: 1, def: 0 } ];	
	this.output_slots = [ { name: 'value', dt: core.datatypes.FLOAT, desc: 'The output value: (I + 1) / 2', lo: 0, hi: 1, def: 0 } ];
	
	this.reset = function()
	{
		self.value = 0.0;
	};
	
	this.update_input = function(slot, data)
	{
		var v = (data + 1.0) * 0.5;
		
		self.value = v < 0.0 ? 0.0 : v > 1.0 ? 1.0 : v;
	};
	
	this.update_output = function(slot)
	{
		return self.value;
	};
};
