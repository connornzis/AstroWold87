import { Header } from '@/components/ui/header'
import { Progress } from '@/components/ui/progress'
import { ParallaxStarsbackground } from '@/components/ui/night_sky'
import { ILoveSmellingFeet } from '@/components/ui/footer'
import { ModuleCard } from '@/components/ui/module_card'
import { useNavigate } from 'react-router-dom'

const mockModules = [
    {
        id: 'password',
        title: 'Password Security Basics',
        description: 'Learn how to create strong, unbreakable passwords',
        difficulty: 'beginner' as const,
        duration: 5,
        completed: false,
        locked: false,
    },
    {
        id: 'phishing',
        title: 'Phishing Awareness',
        description: 'Spot fake emails and avoid social engineering',
        difficulty: 'beginner' as const,
        duration: 7,
        completed: false,
        locked: true,
    },
]

export function ModuleList() {
    const navigate = useNavigate()
    const completed = mockModules.filter(m => m.completed).length
    const progress = (completed / mockModules.length) * 100

    return (
        <div className="min-h-screen bg-black circuit-pattern relative overflow-hidden">
            <ParallaxStarsbackground
                starCount={200}
                glowCount= {30}
                strength={200}
                smoothing={0.1}
                friction={0.95}
                className="z-0"
            />
            <Header />
            <main className="relative z-10 px-6 py-8 mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Cybersecurity Learning Path
                        </h1>
                        <p className="text-gray-300">
                            Choose a module to start learning
                        </p>
                    </div>

                    <div className="mb-6">
                        <Progress value={progress} className="h-3" />
                        <p className="text-sm text-gray-400 mt-1 text-center">
                            {completed}/{mockModules.length} Completed
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockModules.map(mod => (
                            <ModuleCard
                                key={mod.id}
                                module={mod}
                                onStart={() => navigate(`/quiz/${mod.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <ILoveSmellingFeet />
        </div>
    )
}