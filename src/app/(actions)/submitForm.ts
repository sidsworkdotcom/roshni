"use server";

import {
  BUDGET_MAP,
  formSchema,
  FormValues,
  PROJECT_TYPE_MAP
} from "@/types/submitForm.types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(data: FormValues) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors
    };
  }

  const formattedData = {
    ...result.data,
    projectType:
      PROJECT_TYPE_MAP[
        result.data.projectType as keyof typeof PROJECT_TYPE_MAP
      ],
    budget: BUDGET_MAP[result.data.budget as keyof typeof BUDGET_MAP]
  };

  const { error } = await resend.emails.send({
    from: `Roshnistudio.com - ${result.data.email} - <contact@resend.dev>`,
    to: ["rdaswani803@gmail.com"],
    subject: `New Enquiry from ${formattedData.name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Enquiry</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f2ede4;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2ede4;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background-color:#c5a059;padding:32px 40px;">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;letter-spacing:0.5px;">
                        New Project Enquiry
                      </h1>
                      <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">
                        Submitted via contact form
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 40px;">

                      <!-- Contact Details -->
                      <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9e7f3f;">
                        Contact Details
                      </h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0ebe0;width:35%;">
                            <span style="font-size:13px;color:#888;font-weight:500;">Name</span>
                          </td>
                          <td style="padding:10px 0;border-bottom:1px solid #f0ebe0;">
                            <span style="font-size:14px;color:#1a1a1a;font-weight:600;">${formattedData.name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0ebe0;">
                            <span style="font-size:13px;color:#888;font-weight:500;">Email</span>
                          </td>
                          <td style="padding:10px 0;border-bottom:1px solid #f0ebe0;">
                            <a href="mailto:${formattedData.email}" style="font-size:14px;color:#c5a059;text-decoration:none;font-weight:600;">
                              ${formattedData.email}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;">
                            <span style="font-size:13px;color:#888;font-weight:500;">Location</span>
                          </td>
                          <td style="padding:10px 0;">
                            <span style="font-size:14px;color:#1a1a1a;">${formattedData.location}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- Project Details -->
                      <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9e7f3f;">
                        Project Details
                      </h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0ebe0;width:35%;">
                            <span style="font-size:13px;color:#888;font-weight:500;">Project Type</span>
                          </td>
                          <td style="padding:10px 0;border-bottom:1px solid #f0ebe0;">
                            <span style="font-size:14px;color:#1a1a1a;">${formattedData.projectType}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;">
                            <span style="font-size:13px;color:#888;font-weight:500;">Budget Range</span>
                          </td>
                          <td style="padding:10px 0;">
                            <span style="display:inline-block;background-color:#fdf6e8;color:#9e7f3f;font-size:13px;font-weight:600;padding:3px 10px;border-radius:4px;border:1px solid #f0d89a;">
                              ${formattedData.budget}
                            </span>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9e7f3f;">
                        Message
                      </h2>
                      <div style="background-color:#faf8f5;border-left:3px solid #c5a059;border-radius:0 6px 6px 0;padding:16px 20px;">
                        <p style="margin:0;font-size:14px;color:#333;line-height:1.7;">
                          ${formattedData.message.replace(/\n/g, "<br/>")}
                        </p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#faf8f5;padding:20px 40px;border-top:1px solid #ede8de;">
                      <p style="margin:0;font-size:12px;color:#aaa;text-align:center;">
                        This message was submitted via your website contact form.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      errors: { _form: ["Failed to send enquiry. Please try again."] }
    };
  }

  return {
    success: true,
    message: "Thank you! Your enquiry has been sent."
  };
}
