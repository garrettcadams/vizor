E2.plugins["cube_mesh_generator"] = function(core, node) {
	var self = this;
	var gl = core.renderer.context;
	
	this.desc = 'Create a cube mesh of unit size with normals and one set of UV-cordinates.';
	this.input_slots = [];
	this.output_slots = [ { name: 'mesh', dt: core.datatypes.MESH, desc: 'Cube mesh.' } ];
	this.mesh = null;
	
	this.reset = function()
	{
		self.updated = true;
	};
	
	this.update_output = function(slot)
	{
		return self.mesh;
	};
	
	this.state_changed = function(ui)
	{
		if(!ui)
		{
			msg('Cube: Generating mesh.');
			self.mesh = new Mesh(gl, gl.TRIANGLES);
			
			var verts = self.mesh.vertex_buffers['VERTEX'] = new VertexBuffer(gl, VertexBuffer.vertex_type.VERTEX);
			
			verts.bind_data([
				// Front face
				-1.0, -1.0,  1.0,
				1.0, -1.0,  1.0,
				1.0,  1.0,  1.0,
				-1.0,  1.0,  1.0,

				// Back face
				-1.0, -1.0, -1.0,
				-1.0,  1.0, -1.0,
				1.0,  1.0, -1.0,
				1.0, -1.0, -1.0,

				// Top face
				-1.0,  1.0, -1.0,
				-1.0,  1.0,  1.0,
				1.0,  1.0,  1.0,
				1.0,  1.0, -1.0,

				// Bottom face
				-1.0, -1.0, -1.0,
				1.0, -1.0, -1.0,
				1.0, -1.0,  1.0,
				-1.0, -1.0,  1.0,

				// Right face
				1.0, -1.0, -1.0,
				1.0,  1.0, -1.0,
				1.0,  1.0,  1.0,
				1.0, -1.0,  1.0,

				// Left face
				-1.0, -1.0, -1.0,
				-1.0, -1.0,  1.0,
				-1.0,  1.0,  1.0,
				-1.0,  1.0, -1.0
			]);
				
			var norms = self.mesh.vertex_buffers['NORMAL'] = new VertexBuffer(gl, VertexBuffer.vertex_type.NORMAL);
			
			norms.bind_data([
				// Front
				0.0,  0.0,  1.0,
				0.0,  0.0,  1.0,
				0.0,  0.0,  1.0,
				0.0,  0.0,  1.0,

				// Back
				0.0,  0.0, -1.0,
				0.0,  0.0, -1.0,
				0.0,  0.0, -1.0,
				0.0,  0.0, -1.0,

				// Top
				0.0,  1.0,  0.0,
				0.0,  1.0,  0.0,
				0.0,  1.0,  0.0,
				0.0,  1.0,  0.0,

				// Bottom
				0.0, -1.0,  0.0,
				0.0, -1.0,  0.0,
				0.0, -1.0,  0.0,
				0.0, -1.0,  0.0,

				// Right
				1.0,  0.0,  0.0,
				1.0,  0.0,  0.0,
				1.0,  0.0,  0.0,
				1.0,  0.0,  0.0,

				// Left
				-1.0,  0.0,  0.0,
				-1.0,  0.0,  0.0,
				-1.0,  0.0,  0.0,
				-1.0,  0.0,  0.0
			]);

			/*var face_colors = [
				[1.0,  1.0,  1.0,  1.0],    // Front face: white
				[1.0,  0.0,  0.0,  1.0],    // Back face: red
				[0.0,  1.0,  0.0,  1.0],    // Top face: green
				[0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
				[1.0,  1.0,  0.0,  1.0],    // Right face: yellow
				[1.0,  0.0,  1.0,  1.0]     // Left face: purple
			];

			var c_data = [];

			for(var j = 0; j < 6; j++) 
			{
				var c = face_colors[j];

				for(var i = 0; i < 4; i++) 
					c_data = c_data.concat(c);
			}
			
  			var colors = self.mesh.vertex_buffers['COLOR'] = new VertexBuffer(gl, VertexBuffer.vertex_type.COLOR);
  			
  			colors.bind_data(c_data);*/

  			var uv0 = self.mesh.vertex_buffers['UV0'] = new VertexBuffer(gl, VertexBuffer.vertex_type.UV0);
			
			uv0.bind_data([
				// Front
				0.0,  0.0,
				1.0,  0.0,
				1.0,  1.0,
				0.0,  1.0,
				// Back
				0.0,  0.0,
				1.0,  0.0,
				1.0,  1.0,
				0.0,  1.0,
				// Top
				0.0,  0.0,
				1.0,  0.0,
				1.0,  1.0,
				0.0,  1.0,
				// Bottom
				0.0,  0.0,
				1.0,  0.0,
				1.0,  1.0,
				0.0,  1.0,
				// Right
				0.0,  0.0,
				1.0,  0.0,
				1.0,  1.0,
				0.0,  1.0,
				// Left
				0.0,  0.0,
				1.0,  0.0,
				1.0,  1.0,
				0.0,  1.0
			]);
  
			var indices = self.mesh.index_buffer = new IndexBuffer(gl);
			
			indices.bind_data([
				0,  1,  2,      0,  2,  3,    // front
				4,  5,  6,      4,  6,  7,    // back
				8,  9,  10,     8,  10, 11,   // top
				12, 13, 14,     12, 14, 15,   // bottom
				16, 17, 18,     16, 18, 19,   // right
				20, 21, 22,     20, 22, 23    // left
			]);
		}
	};
};
