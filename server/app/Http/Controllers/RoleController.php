<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        return Role::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $role = Role::create($request->all());

        return response()->json($role, 201);
    }

    public function show($id)
    {
        $role = Role::find($id);

        if (is_null($role)) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        return response()->json($role);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
        ]);

        $role = Role::find($id);

        if (is_null($role)) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $role->update($request->all());

        return response()->json($role);
    }

    public function destroy($id)
    {
        $role = Role::find($id);

        if (is_null($role)) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $role->delete();

        return response()->json(['message' => 'Role deleted successfully']);
    }
}
