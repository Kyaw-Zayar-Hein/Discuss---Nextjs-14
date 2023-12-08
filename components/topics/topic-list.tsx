import Link from "next/link";
import { Chip } from "@nextui-org/react";

import { db } from "@/db";
import paths from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const rederedTopic = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <>
      <h3 className="text-lg">Topics</h3>
      <div className="flex gap-2 flex-wrap">{rederedTopic}</div>
    </>
  );
}
