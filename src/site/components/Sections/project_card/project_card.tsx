import Image from "next/image";
import React from "react";
import Link from "next/link";
import { project_card_array } from ".";

const ProjectCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 box-border">
            {project_card_array.map((val) => {
                return (
                    <div key={val.id} className="grid gap-5 shadow-md rounded-xl overflow-clip ring-1 ring-slate-500/10">
                        <div className="overflow-clip max-h-96">
                            <Image src={val.image} alt={val.alt} className="rounded" style={{}} />
                        </div>
                        <div className="px-8 py-3">
                            <div className="my-5 grid gap-3">
                                <h1 className="uppercase font-bold text-xl">{val.name}</h1>
                                <p className="text-sm opacity-75">{val.description}</p>
                            </div>
                            <div className="my-5 grid gap-2">
                                <span className="text-xs opacity-70">Tech Stack:</span>
                                <div className="flex gap-3 text-sm select-none">
                                    {val.tech.map((techItem, key) => (
                                        <span className="px-3 py-2 opacity-75 ring-1 ring-slate-500/20 rounded bg-inherit" key={key}>{techItem}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="my-5 text-sm opacity-70 float-right hover:opacity-50 duration-300">
                                <Link href={val.link} target="_blank">{val.linkTitle}</Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCard;
