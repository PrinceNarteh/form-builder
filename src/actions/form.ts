"use server";

import prisma from "@/lib/prisma";
import { formSchema, FormType } from "@/schemas/form";
import { v4 as uuid } from "uuid";

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
  const stats = await prisma.form.aggregate({
    where: {
      userId: "123",
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
}

export async function CreateForm(data: FormType) {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Form input not valid");
  }

  const form = await prisma.form.create({
    data: {
      userId: uuid(),
      ...data,
    },
  });

  if (!form) {
    throw new Error("Error creating form");
  }

  return form.id;
}

export async function GetForms() {
  return await prisma.form.findMany({
    where: {
      userId: "123",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
