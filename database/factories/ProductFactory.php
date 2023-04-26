<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $users = User::all('id');

        return [
            'image' => Str::random(12),
            'name' => fake()->text(10),
            'description' => fake()->paragraph(2),
            'price' => fake()->numberBetween(100, 1000000000),
            'quantity' => fake()->numberBetween(1, 1000),
            'user_id' => fake()->randomElement($users),
        ];
    }
}
