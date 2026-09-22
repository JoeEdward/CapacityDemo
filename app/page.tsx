"use client"
import Image from "next/image";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {cn} from "cn";
import {ArrowRight, Car, Star} from "lucide-react";
import {Progress, ProgressLabel, ProgressValue} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

  return (
    <div className={cn('flex flex-col gap-4')}>
      <Card>
        <CardHeader>
            <h2 className={cn('font-semibold text-lg flex gap-2 items-center')}>
                <Star/> Favourites
            </h2>
        </CardHeader>

          <CardContent>
              <div className={cn('grid xl:grid-cols-3 grid-cols-1 gap-4')}>
                  <Card>
                      <CardHeader>
                          <h3>Location Name 1</h3>
                          <p className={cn('text-sm text-gray-400')}>
                              Current Event here (12:00 - 13:00)
                          </p>
                      </CardHeader>
                      <CardContent>
                          <Progress value={50} >
                              <ProgressLabel>Normally busy</ProgressLabel>
                              <ProgressValue />
                          </Progress>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h3>Location Name 2</h3>
                          <p className={cn('text-sm text-gray-400')}>Current Event here</p>
                      </CardHeader>
                      <CardContent>
                          <Progress value={12} >
                              <ProgressLabel>Basically Empty</ProgressLabel>
                              <ProgressValue />
                          </Progress>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h3>Location Name 3</h3>
                          <p className={cn('text-sm text-gray-400')}>Current Event here</p>
                      </CardHeader>
                      <CardContent>
                          <Progress value={98} >
                              <ProgressLabel>Near Capacity</ProgressLabel>
                              <ProgressValue />
                          </Progress>
                      </CardContent>
                  </Card>
              </div>
          </CardContent>
      </Card>
        <Card>
            <CardHeader className={cn('flex gap-2 items-center justify-between')}>
                All Locations
                <Button onClick={() => router.push('/locations')}>
                    <ArrowRight />
                </Button>
            </CardHeader>
        </Card>
    </div>
  );
}
