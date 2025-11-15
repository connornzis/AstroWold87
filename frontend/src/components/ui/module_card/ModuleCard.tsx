// src/components/ui/module_card/ModuleCard.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock, Play, CheckCircle2 } from 'lucide-react'

type Module = {
    id: string
    title: string
    description: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    duration: number
    completed: boolean
    locked: boolean
}

type Props = {
    module: Module
    onStart: () => void
}

export function ModuleCard({ module, onStart }: Props) {
    const diffColor =
        module.difficulty === 'beginner'
            ? 'text-green-400'
            : module.difficulty === 'intermediate'
                ? 'text-yellow-400'
                : 'text-red-400'

    return (
        <Card
            className={`bg-[#2F4B7A]/30 border-[#4A668E]/50 backdrop-blur-sm ${
                module.locked ? 'opacity-60' : ''
            }`}
        >
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
          <span
              className={`text-sm font-semibold px-2 py-1 rounded-full bg-black/50 ${diffColor}`}
          >
            {module.difficulty.toUpperCase()}
          </span>
                    {module.completed && (
                        <CheckCircle2 className="w-5 h-5 text-[#DBA64A]" />
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                    {module.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{module.description}</p>
                <p className="text-xs text-gray-500 mb-4">
                    Est. {module.duration} min
                </p>

                <Button
                    onClick={onStart}
                    disabled={module.locked}
                    className="w-full bg-gradient-to-r from-[#C92337] to-[#E16237] hover:from-[#E16237] hover:to-[#DBA64A] text-white"
                >
                    {module.locked ? (
                        <>
                            <Lock className="w-4 h-4 mr-2" />
                            Locked
                        </>
                    ) : module.completed ? (
                        <>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Review
                        </>
                    ) : (
                        <>
                            <Play className="w-4 h-4 mr-2" />
                            Start Module
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    )
}