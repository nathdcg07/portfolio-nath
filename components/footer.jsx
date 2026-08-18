"use client"

import React from 'react';
import Link from 'next/link';
import {Terminal, Shield, Mail, Linkedin, Github} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 py-12">
            <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2 space-y-3"> 
                    <div className="flex items-center gap-2 text-white tracking-tight">
                        <Terminal className="h-5 w-5 text-indigo-400" />
                        <span className="text-lg font-semibold">My Portfolio</span>
                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} My Portfolio. Nath™ Developer. All rights reserved.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-slate-300">Modules</h4>
                    <ul className="space-y-1.5 text-xs">
                        <li><Link href="/about-me">About Me</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-slate-300">Contact</h4>
                    <ul className="space-y-2 text-xs">
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-indigo-400" />
                            <a href="mailto:nathalydcgutierrez@gmail.com" className="text-slate-400 hover:text-white">
                                nathalydcgutierrez@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Shield className="h-3.5 w-3.5 text-slate-500" />
                            <span className="text-slate-500">Academic/Comercial License</span>
                        </li>
                    </ul>
                </div>

                <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-600">
                    <div>
                        <span>POWERED BY:</span>
                        <span className="text-slate-500">NEXT.JS 14 (TURBOPACK) + TAILWIND CSS</span>
                    </div>
                    <div>
                        <span>DESIGNED BY:</span>
                        <span className="text-slate-500">NATHALY DCG</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}