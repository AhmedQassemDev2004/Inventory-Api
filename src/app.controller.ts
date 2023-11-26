import { Controller, Get } from '@nestjs/common';
import { Public } from './user/auth/decorators/public.decorator';

@Controller('')
export class AppController {
    @Public()
    @Get("/")
    hi() {
        return `
                    <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to Inventory API</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #3498db;
                        /* Background color for the entire page */
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }

                    .container {
                        text-align: center;
                        background-color: #ecf0f1;
                        /* Background color for the container */
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                        color: #2c3e50;
                        /* Text color for the main heading */
                    }

                    p {
                        color: #7f8c8d;
                        /* Text color for paragraphs */
                    }

                    .api-details {
                        margin-top: 20px;
                    }

                    .api-details p {
                        font-size: 16px;
                        color: #27ae60;
                        /* Text color for API details */
                    }
                </style>
            </head>

            <body>

                <div class="container">
                    <h1>Welcome to Inventory API</h1>
                    <p>This is a simple example HTML page with nested CSS for the Inventory API.</p>

                    <div class="api-details">
                        <h2>API Details</h2>
                        <p>Description: This API allows you to manage your inventory.</p>
                    </div>
                </div>

            </body>

            </html>`;
    }
}
